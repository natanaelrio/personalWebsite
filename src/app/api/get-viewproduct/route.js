import { ResponseData } from '@/controllers/responseData'
import { prisma } from "@/controllers/prisma"

export async function AmbilDataUsers(id) {
    const data = await prisma.admin.findMany({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            view_barang: true,
        }
    })
    return data
}


export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id)
    const res = await ResponseData(data, authorization)
    return res
}