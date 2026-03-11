'use client'

import { createContext } from 'react'
import { z } from 'zod'

export const FormSchemaContext = createContext<z.ZodType | undefined>(undefined)
