import db from "../utils/firebase-config.js";
import { collection, getDocs, query, where, doc, updateDoc, getDoc } from "firebase/firestore";

// Tüm Pools koleksiyonunu çekme
async function getPools() {
  const poolsCollectionRef = collection(db, "pools");

  try {
    const poolsSnapshot = await getDocs(poolsCollectionRef);

    return poolsSnapshot.docs.map((doc) => ({
      id: doc.id, // Doküman ID'si
      ...doc.data(), // Pool verileri
    }));
  } catch (error) {
    console.error("Error fetching pools:", error);
    return [];
  }
}

// ID'ye göre tek bir pool'u çekme
async function getPoolById(poolId) {
  try {
    // Doküman referansını oluştur
    const poolDocRef = doc(db, "pools", poolId);

    // Dokümanı al
    const poolSnapshot = await getDoc(poolDocRef);

    if (!poolSnapshot.exists()) {
      console.log("No matching pool found.");
      return null;
    }

    // Doküman verilerini döndür
    return {
      id: poolSnapshot.id, // Doküman ID
      ...poolSnapshot.data(), // Doküman verileri
    };
  } catch (error) {
    console.error("Error fetching pool by ID:", error);
    return null;
  }
}

// Pool güncelleme
async function updatePool(pool) {
  try {
    // Pool'un ID'si üzerinden referans oluştur
    const poolDocRef = doc(db, "pools", pool.id);

    // Pool'u güncellemek için updateDoc kullan
    await updateDoc(poolDocRef, pool);

    console.log("Pool successfully updated.");
    return true;
  } catch (error) {
    console.error("Error updating pool:", error);
    return false;
  }
}

export default {
  getPools,
  getPoolById,
  updatePool,
};
