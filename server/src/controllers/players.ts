import { Request, Response } from "express"

export const get = async (req: Request, res: Response) => {
  return res.status(200).send('get');
}

export const getById = async (req: Request, res: Response) => {
  return res.status(200).send('getById')
}

export const post = async (req: Request, res: Response) => {
  return res.status(200).send('post')
}

export const put = async (req: Request, res: Response) => {
  return res.status(200).send('put')
}

export const deleteById = async (req: Request, res: Response) => {
  return res.status(200).send('deleteById')
}