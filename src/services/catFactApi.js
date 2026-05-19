const catFactApi = {
  baseUrl: "https://catfact.ninja/",
  getFacts: async function(amount) {
    const querry = `${this.baseUrl}facts?limit${amount}`;
    return await this.get(querry);
  },
  get: async function(querry) {
    try {
      const response = await fetch (querry);
      
      if(!response) {
        throw new Error(`Http error!: ${response.status}`);
      }

      const json = await response.json();
      return json.data;
    } 
    catch (error) {
      console.error("Fetch failed:", error);
      return {};
    }
  }
}

export default catFactApi; 
