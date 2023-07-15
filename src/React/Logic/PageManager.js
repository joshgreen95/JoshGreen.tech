let PageManager = {
    activePage: null,
    isWindowShown: false,

    get activePage(){
        return this.activePage;
    },

    set activePage(page){
        this.activePage = page;
    },
    
    get isWindowShown(){
        return this.isWindowShown;
    },

    set isWindowShown(state){
        this.isWindowShown = state;
    },
}

export { PageManager };