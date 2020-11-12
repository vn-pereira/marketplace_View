import Axios from 'axios'

export default async (req, res) => {
  const data = req.body
  Axios.post(
    'https://limitless-cove-49173.herokuapp.com/products/new-product',
    { ...data }
  )

  return res.status(201).json({ ok: true })
}
