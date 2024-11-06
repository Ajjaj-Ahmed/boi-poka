const getStoreReadList = ()=>{
    const storeListStr =localStorage.getItem('read-list');
    if(storeListStr){
        const storeList = JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }

}

const addToStoreReadList =(id)=>{
    const storeList = getStoreReadList();
    if(storeList.includes(id)){
        console.log(id,'already exists')
    }
    else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr)
    }
}
export {addToStoreReadList};