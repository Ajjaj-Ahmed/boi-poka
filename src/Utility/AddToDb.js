import { toast } from "react-toastify";

const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if (storeListStr) {
        const storeList = JSON.parse(storeListStr);
        return storeList;
    }
    else {
        return [];
    }

}

const addToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        console.log(id, 'already exists')
    }
    else {
        storeList.push(id);
        toast("Added on the read list");
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr)
    }
}

const getWishList = () => {
    const storeWishListStr = localStorage.getItem('wish-list');
    if (storeWishListStr) {
        const wishList = JSON.parse(storeWishListStr)
        return wishList
    }
    else {
        return []
    }
}

const addToStoreWishList = (id) => {
    const wishList = getWishList();
    if (wishList.includes(id)) {
        console.log(id, 'already exit in the list')
        return
    } else {
        wishList.push(id)
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr)
    }
}
export { addToStoreReadList, addToStoreWishList, getStoreReadList };