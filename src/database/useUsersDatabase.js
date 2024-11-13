import { useSQLiteContext } from "expo-sqlite";

export function useUserDatabase() {
  const database = useSQLiteContext();

  async function authUser({ email, password }) {
    // console.log ("authUser email: ", email, " - password: ", password);
    try {
      const result = await database.getFirstAsync(`
        SELECT id, nome, email, role FROM users where email='${email}' and senha='${password}';
    `);
      // console.log(result)
      return result;
    } catch (error) {
      console.error("useUserDatabase authUser error: ", error);
      throw error;
    }
  }

  async function getAllusers() {
   try{
    const result = await database.getAllAsync('SELECT id, nome FROM users');
    return result;
   } catch (error) {
    console.error("useUsersDatabase getAllUsers error: ", error);
    throw error;
   }
   
  }

   

  return {
    authUser, 
  };
}
