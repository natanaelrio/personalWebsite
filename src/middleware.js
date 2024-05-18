
export async function middleware(request) {

    if (request.nextUrl.pathname.startsWith('/')) {
        // GET
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-viewproduct?id=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                next: { revalidate: 0 }
            })

            const data = await res.json()
            data?.data?.map(async (data) => {
                // UPDATE
                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/update-view-products?id=1`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    },
                    body: JSON.stringify({
                        view_barang: data.view_barang ? data.view_barang + 1 : 1
                    }),
                    next: { revalidate: 0 }
                })
            })

        }
        catch (e) {
            console.log(e);
        }
    }
}





// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/products/:path*',
// }