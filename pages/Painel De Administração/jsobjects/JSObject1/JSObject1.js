export default {
	myVar1: [],
	myVar2: {},
	async verifyConfig () {
		const api_url = await appsmith.store.api_url;
		const api_key = await appsmith.store.api_key;
		if(!api_url && !api_key){
			navigateTo("Acesso Administração", "SAME_WINDOW");
		}else{
			try{
				await Fetch_Instances.run()
      }catch(error){
				removeValue("api_url");
				removeValue("api_key");
				navigateTo("Acesso Administração", "SAME_WINDOW");
      }
			if(!Fetch_Instances.data[0].hasOwnProperty('instance')){
				removeValue("api_url");
				removeValue("api_key");
				navigateTo("Acesso Administração", "SAME_WINDOW");
			}
		}
	}
}