import db from "../utils/firebase-config.js";
import { collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";

async function getWallets() {
    const walletsCollectionRef = collection(db, "/wallets");

    try {
      const walletsSnapshot = await getDocs(walletsCollectionRef);
  
      return walletsSnapshot.docs.map((d) => d.data());
    } catch (error) {
      console.error("Error fetching wallets:", error);
      return [];
    }
}

async function getWalletByPublicKey(publicKey) {
  const walletsCollectionRef = collection(db, "wallets");

  try {
    const q = query(walletsCollectionRef, where("public_key", "==", publicKey));
    const walletsSnapshot = await getDocs(q);

    if (walletsSnapshot.empty) {
      console.log("No matching wallet found.");
      return null;
    }
    return walletsSnapshot.docs[0].data();
  } catch (error) {
    console.error("Error fetching wallet by public_key:", error);
    return null;
  }
}

async function updateWallet(wallet) {
  const walletsCollectionRef = collection(db, "wallets");

  try {
    // `public_key` ile eşleşen wallet'ı sorguluyoruz
    const q = query(walletsCollectionRef, where("public_key", "==", wallet.public_key));
    const walletsSnapshot = await getDocs(q);

    if (walletsSnapshot.empty) {
      console.log("No matching wallet found for the given public_key.");
      return false;
    }

    // İlk eşleşen wallet dokümanını alıyoruz
    const walletDoc = walletsSnapshot.docs[0];

    // Wallet'ı güncellemek için updateDoc kullanıyoruz
    const walletDocRef = doc(db, "wallets", walletDoc.id);
    await updateDoc(walletDocRef, wallet);

    console.log("Wallet successfully updated.");
    return true;
  } catch (error) {
    console.error("Error updating wallet:", error);
    return false;
  }
}

export default {
    getWallets,
    getWalletByPublicKey,
    updateWallet
};
