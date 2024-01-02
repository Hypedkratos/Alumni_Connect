import { ID, Query } from "appwrite";
import { account, database, url } from "./conf";
export async function createUserAccount({ name, gender,rollnumber, email, password }) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )

        const save = await saveUserToDB({
            id: newAccount.$id,
            name: name,
            gender: gender,
            rollnumber: rollnumber,
            email: email
        })
        console.log(save);
        return newAccount
    } catch (error) {
        console.log('something went wrong in creating account', error)
    }
}
export async function loginUserAccoutn(email, password) {
    try {
        const newAccount = await account.createEmailSession(
            email,
            password,
        )
        return newAccount
    } catch (error) {
        console.log('something went wrong in login', error)
    }
}

export async function logoutUserAccount() {
    try {
        const newAccount = await account.deleteSession('current')
        return newAccount
    } catch (error) {
        console.log('something went wrong in logout')
    }

}
export async function signOutAccount() {
    try {
        const session = await account.deleteSession('current');
        return session;
    } catch (error) {
        console.log(error);
    }
}
export async function getUser() {
    try {
        const user = await account.get()
        return user
    } catch (error) {
        console.log('account not found')
    }
}

export async function saveOrderToDB(formData) {
    try {
        const res = await database.createDocument(
            url.db, url.collection, ID.unique(),
            formData
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export async function showDB() {
    try {
        const res = await database.listDocuments(
            url.db, url.collection,
        )
        return res;
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteData(id) {
    try {
        const res = await database.deleteDocument(
            url.db, url.collection,
            id
        )
        return res;
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}
export async function saveUserToDB(user) {
    try {
        const res = await database.createDocument(
            url.db, url.usercollection, ID.unique(),
            user
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await getUser();

        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            url.db, url.usercollection,
            [Query.equal("id", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function forgetPass(email) {
    try {
        const response = await account.createRecovery(email, 'https://annadata-rk.vercel.app/forgetpass');
        return response;
    } catch (error) {
        console.log(error);
    }
}