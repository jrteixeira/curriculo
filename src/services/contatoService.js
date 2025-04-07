// services/contatoService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function salvarContato({ name, email, message }) {
  try {
    await addDoc(collection(db, "contato"), {
      name,
      email,
      message,
      createdAt: new Date(),
    });
    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar contato:", error);
    return { success: false, error };
  }
}
