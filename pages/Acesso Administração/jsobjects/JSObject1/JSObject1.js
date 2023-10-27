export default {
	myVar1: [],
	myVar2: {},
	async verifyConfig () {
		const api_url = await appsmith.store.api_url;
		const api_key = await appsmith.store.api_key;
		if(!api_url && !api_key){
			showModal('ModalAcessoPainelAdmin');
		}else{
			navigateTo("Painel De Administração", "SAME_WINDOW");
		}
	}
}