export default {
	myVar1: [],
	myVar2: {},
	async verifyConfig () {
		
		const api_url = await appsmith.store.api_url;
		const api_global_key_cliente = await appsmith.store.api_global_key_cliente;
		const api_key_cliente = await appsmith.store.api_key_cliente;
		if(!api_url || !api_global_key_cliente || !api_key_cliente){
			showModal('ModalAcessoPainelClientes');
		}else{
			navigateTo("Painel Para Clientes", "SAME_WINDOW");
		}
	}
}