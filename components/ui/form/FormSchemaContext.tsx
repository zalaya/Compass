'use client'

import { createContext } from 'react'
import { ZodObject, ZodRawShape } from 'zod'

export const FormSchemaContext = createContext<ZodObject<ZodRawShape> | undefined>(undefined)
