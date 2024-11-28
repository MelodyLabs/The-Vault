"use client"

import useAuth from "@/hooks/useAuth"
import useUploadP from "@/hooks/useUploadP"
import { useUser } from "@/hooks/useUser"
import { GoPlus } from 'react-icons/go';

const AddPlaylistButton = () => {
    const authModal = useAuth()
    const { user } = useUser()
    const uploadPlaylistModal = useUploadP()

    const onClick = () => {
        if (!user) {
            return authModal.onOpen()
        }

        return uploadPlaylistModal.onOpen()
    }
    return (
        <button className="bg-custom-color-5 cursor-pointer
                      hover:bg-custom-color-3
                      transition
                      border rounded-xl border-custom-color-3 h-fit w-fit p-3 flex items-center justify-center"
                onClick={onClick}>
            <GoPlus/>
        </button>
    )
}
 
export default AddPlaylistButton
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola
//hola