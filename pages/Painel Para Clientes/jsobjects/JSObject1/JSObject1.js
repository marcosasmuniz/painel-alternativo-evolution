export default {
	myVar1: [],
	myVar2: {},
	async verifyConfig () {
		const api_url = await appsmith.store.api_url;
		const api_key_cliente = await appsmith.store.api_key_cliente;
		if(!api_url && !api_key_cliente){
			navigateTo("Acesso Clientes", "SAME_WINDOW");
		}else{
			try{
				await Fetch_Instances.run();
				await Fetch_Instance.run();
				await Find_Settings.run();
				await Find_Typebot.run();
      }catch(error){
				removeValue("api_key_cliente");
				navigateTo("Acesso Clientes", "SAME_WINDOW");
      }
			if(!Fetch_Instances.data[0].hasOwnProperty('instance')){
				removeValue("api_key_cliente");
				navigateTo("Acesso Clientes", "SAME_WINDOW");
			}
			showModal('ModalConfigsConexao');
		}
	}
}