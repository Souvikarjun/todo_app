"use client";

import { formProps } from "../types/types"
import { useRef } from "react"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Form({children, action , className, onSubmit}: formProps) {

    const ref = useRef<HTMLFormElement>(null);
  return ( 
    <form action={async (FormData) => {
            await action(FormData);
            ref.current?.reset()
        }   
        }onSubmit={onSubmit} ref={ref}>{children}</form>
  )
}

