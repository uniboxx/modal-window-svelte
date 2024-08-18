function createState(){
  let hideModal=$state(true);

  return {
    get hideModal(){
      return hideModal;
    },
    set hideModal(value){
      hideModal=value;
    }
  }
}

export const s = createState();