import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    //http://localhost:3000/api/products/search?query=сырная
    const query = req.nextUrl.searchParams.get('query') || ''; 

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,  // includes js
                mode: 'insensitive' // регистр 
            }
        },
        take: 5
    })


    return NextResponse.json(products);
}

//  ✓ Compiled in 477ms(1065 modules)
// NextURL {
//     [Symbol(NextURLInternal)]: {
//         url: URL {
//             href: 'http://localhost:3000/api/products/search',
//                 origin: 'http://localhost:3000',
//                     protocol: 'http:',
//                         username: '',
//                             password: '',
//                                 host: 'localhost:3000',
//                                     hostname: 'localhost',
//                                         port: '3000',
//                                             pathname: '/api/products/search',
//                                                 search: '',
//                                                     searchParams: URLSearchParams { },
//             hash: ''
//         },
//         options: { headers: [Object], nextConfig: undefined },
//         basePath: '',
//             domainLocale: undefined,
//                 defaultLocale: undefined,
//                     buildId: undefined,
//                         locale: undefined,
//                             trailingSlash: false
//     }
// }