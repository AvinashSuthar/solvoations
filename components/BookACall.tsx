'use client'
import React, { useState } from 'react'
import {
    CloseButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from './ui/BookCall'
import emailjs from 'emailjs-com'
import animationData from '@/public/sendMessage.json'

import { PiPhoneCall } from 'react-icons/pi'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

export function BookACall() {
    const [loading, setLoading] = useState(false)

    const [value, setValue] = useState<{
        name: string | null
        startDate: string | null
        endDate: string | null
    }>({
        name: null,
        startDate: null,
        endDate: null,
    })

    const defaultOptions = {
        loop: loading,
        autoplay: loading,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    const Lottie = dynamic(() => import('react-lottie'), {
        ssr: false,
    })

    function validateForm() {
        if (!value.name || !value.startDate || !value.endDate) {
            toast.error('Please fill in all fields')
            return false
        }
        return true
    }

    const handleBookCall = () => {
        if (!validateForm()) {
            return
        }

        const data = {
            email: value.name,
            message: `Name: ${value.name}, Date: ${value.startDate}, Time: ${value.endDate}`,
        }
        setLoading(true)
        emailjs.init('o6FCj7eybSWlzKniL')
        emailjs.send('service_gy57yxh', 'template_1hohhlv', data).then(
            () => {
                toast.success('Message sent successfully')
                console.log('Message sent successfully')
                setLoading(false)
                setValue({
                    name: null,
                    startDate: null,
                    endDate: null,
                })
            },
            () => {
                toast.error('Message failed to send')
                console.log('Message failed to send')
                setLoading(false)
            },
        )
    }

    return (
        <div className="py-40  flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-transparent   flex justify-center group/modal-btn">
                    <div className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                        {/* remove px-3 py-1, add px-5 gap-2 */}
                        <span
                            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-xs gap-2 `}
                        >
                            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                Book A Call
                            </span>
                            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                <PiPhoneCall className="text-white text-xl" />
                            </div>
                        </span>
                    </div>
                </ModalTrigger>
                <ModalBody className="bg-black m-3 rounded-md">
                    <ModalContent className="flex items-center w-full justify-around flex-col">
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Book a call with us
                        </h4>

                        <div className="grid gap-4 w-full">
                            <div
                                className={`absolute -bottom-5 right-0  ${
                                    loading ? 'block' : 'hidden'
                                }`}
                            >
                                {/* <img src="/confetti.gif" alt="confetti" /> */}
                                <Lottie
                                    options={defaultOptions}
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <div className="grid gap-1 text-start">
                                <Label className="text-sm font-medium text-gray-400">
                                    Name
                                </Label>
                                <Input
                                    placeholder="Enter your name"
                                    value={value.name || ''}
                                    onChange={(e) =>
                                        setValue((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    name="name"
                                />
                            </div>
                            <div className="grid gap-1 text-start">
                                <Label className="text-sm  font-medium text-gray-400">
                                    Date
                                </Label>
                                <Input
                                    title="date"
                                    type="date"
                                    value={value.startDate || ''}
                                    className="bg-gray-950 text-gray-300 border border-gray-700 rounded-md px-3 py-2 focus:outline-none shadow-lg shadow-gray-900"
                                    onChange={(e) =>
                                        setValue((prev) => ({
                                            ...prev,
                                            startDate: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="grid gap-1 text-start">
                                <Label className="text-sm  font-medium text-gray-400">
                                    Time
                                </Label>
                                <Input
                                    value={value.endDate || ''}
                                    title="time"
                                    type="time"
                                    className="bg-gray-950 text-gray-300 border border-gray-700 rounded-md px-3 py-2 focus:outline-none shadow-lg shadow-gray-800"
                                    onChange={(e) =>
                                        setValue((prev) => ({
                                            ...prev,
                                            endDate: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <CloseButton className="px-2 py-1 bg-gray-200 text-black cursor-pointer dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-sm text-sm w-28">
                            Cancel
                        </CloseButton>
                        <div
                            onClick={() => {
                                handleBookCall()
                            }}
                            className="relative inline-flex overflow-hidden rounded-sm p-[1px] focus:outline-none"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                            {/* remove px-3 py-1, add px-5 gap-2 */}
                            <span
                                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-sm
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-xs gap-2 `}
                            >
                                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                    Book A Call
                                </span>
                                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                    <PiPhoneCall className="text-white text-xl" />
                                </div>
                            </span>
                        </div>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    )
}
