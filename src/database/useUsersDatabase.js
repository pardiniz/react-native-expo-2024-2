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

  

   async function create ({
    user_id,
    user_cadastro,
    valor_pago,
    data_pagamento,
    observacao,
   })  {
     const statment = await database.prepareAsync(`
      INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao) 
      VALUE ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao);
     `);

      try{
        const result = await statment.executeAsync({});
      } catch (error) {

      } finally {

      }
   }

  return {
    authUser,
  };
}
