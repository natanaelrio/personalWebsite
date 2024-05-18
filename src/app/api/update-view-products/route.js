import { ResponseData } from '@/controllers/responseData'
import { prisma } from "@/controllers/prisma"

export async function AmbilDataUsers(id, databody) {
    const data = await prisma.admin.update({
        where: {
            id: Number(id)
        },
        data: databody
    })
    return data
}

export async function PUT(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const { view_barang } = await req.json()
    const databody = { view_barang }
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id, databody)
    const res = await ResponseData(data, authorization)
    return res
}