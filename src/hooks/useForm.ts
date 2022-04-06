import React, { useState, useEffect } from "react";
import { ContactFormDataType, ContactFormFields } from "@utils/types"
import emailjs from "@emailjs/browser"

/**
 * Custom hook for handling contact form
 * 
 * @param validationFunction? 
 * @returns {
 *   formState,
 *   error,
 *   onSubmitionResStatus,
 *   submitHandler,
 *   updateFormDataHandler,
 *   setErrorHandler,
 *   reset
 * }
 */

const useForm = (validationFunction?: (contactFormDataType: ContactFormDataType) => boolean): {
    formState: ContactFormDataType,
    error: string | null,
    onSubmitionResStatus: number | undefined
    updateFormDataHandler: (field: ContactFormFields, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    setErrorHandler: React.Dispatch<React.SetStateAction<string | null>>,
    resetHanlder: () => void
} => {

    const [formState, setFormState] = useState<ContactFormDataType>({
        name: "",
        email: "",
        message: ""
    })

    const [onSubmitionResStatus, setOnSubmitionResStatus] = useState<number>()

    const [error, setError] = useState<string | null>(null)

    const updateFormDataHandler = (field: ContactFormFields, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const update = e.target.value
        setFormState(prev => ({
            ...prev,
            [field]: update
        }))
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        try {
            if (validate()) {
                emailjs.send(process.env.REACT_APP_MJS_S!, process.env.REACT_APP_MJS_T!, {
                    name: formState.name,
                    message: formState.message,
                    email: formState.email,
                }).then(res => {
                    setOnSubmitionResStatus(res.status)
                    resetHanlder()
                })
            } else {
                return
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "error submitting form")
        } 
    }

    const validate = (): boolean => {
        return validationFunction ? validationFunction(formState) : true
    }

    const resetHanlder = (): void => {
        setFormState({
            name: "",
            email: "",
            message: ""
        })
    }

    useEffect(() => {
        try {
            emailjs.init(process.env.REACT_APP_MJS_UID!);
        } catch (err) {
            setError(err instanceof Error ? err.message : "error on init email service")
        }
    }, [])

    return {
        formState,
        error,
        onSubmitionResStatus,
        updateFormDataHandler,
        submitHandler,
        setErrorHandler: setError,
        resetHanlder,
    }
}

export default useForm