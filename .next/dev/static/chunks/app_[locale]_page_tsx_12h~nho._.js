(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/[locale]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomePage({ params }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const isVi = locale === 'vi';
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const pathWithoutLocale = pathname.replace(/^\/(en|vi|de|fr)/, '') || '/';
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSearch = (e)=>{
        e.preventDefault();
        if (!searchTerm.trim()) return;
        const query = searchTerm.trim().toLowerCase();
        // Service matching logic
        const serviceMatches = [
            {
                keywords: [
                    'labor',
                    'labour',
                    'lao động',
                    'nhân lực',
                    'supply',
                    'cung ứng',
                    'quản lý'
                ],
                url: `/${locale}/services/labor-supply`
            },
            {
                keywords: [
                    'cargo',
                    'loading',
                    'unloading',
                    'bốc xếp',
                    'bốc dỡ',
                    'hàng hóa'
                ],
                url: `/${locale}/services/cargo-loading`
            },
            {
                keywords: [
                    'transport',
                    'inland',
                    'vận tải',
                    'vận chuyển',
                    'nội địa',
                    'đường bộ',
                    'road'
                ],
                url: `/${locale}/services/inland-transport`
            },
            {
                keywords: [
                    'packaging',
                    'package',
                    'đóng gói',
                    'gói hàng',
                    'máy móc'
                ],
                url: `/${locale}/services/packaging`
            },
            {
                keywords: [
                    'lifting',
                    'installation',
                    'nâng',
                    'hạ',
                    'lắp đặt',
                    'cẩu',
                    'crane',
                    'máy'
                ],
                url: `/${locale}/services/lifting-installation`
            },
            {
                keywords: [
                    'vehicle',
                    'rental',
                    'cho thuê',
                    'phương tiện',
                    'xe',
                    'forklift',
                    'xe nâng'
                ],
                url: `/${locale}/services/vehicle-rental`
            }
        ];
        // Find matching service
        const match = serviceMatches.find((service)=>service.keywords.some((keyword)=>query.includes(keyword) || keyword.includes(query)));
        if (match) {
            window.location.href = match.url;
        } else {
            // No match - go to services page with search query
            window.location.href = `/${locale}/services?search=${encodeURIComponent(searchTerm.trim())}&notfound=true`;
        }
    };
    const sidebarMenu = [
        {
            title: isVi ? 'THƯ NGỎ' : 'OPEN LETTER',
            href: `/${locale}/open-letter`
        },
        {
            title: isVi ? 'DỊCH VỤ' : 'SERVICES',
            href: `/${locale}/services`
        },
        {
            title: isVi ? 'GIẤY PHÉP KINH DOANH' : 'BUSINESS LICENSE',
            href: `/${locale}/business-license`
        },
        {
            title: isVi ? 'TẦM NHÌN & SỨ MỆNH' : 'VISION & MISSION',
            href: `/${locale}/vision-mission`
        },
        {
            title: isVi ? 'TUÂN THỦ' : 'COMPLIANCE',
            href: `/${locale}/compliance`
        },
        {
            title: isVi ? 'ĐỐI TÁC & KHÁCH HÀNG' : 'PARTNERS & CLIENTS',
            href: `/${locale}/partners`
        },
        {
            title: isVi ? 'GIỚI THIỆU' : 'ABOUT US',
            href: `/${locale}/about`
        }
    ];
    const featuredServices = [
        {
            title: isVi ? 'Nâng Hạ, Lắp Đặt Máy Móc Thiết Bị' : 'Lifting and Installation of Machinery',
            description: isVi ? 'Đội ngũ nhân viên giàu kinh nghiệm với trang thiết bị chuyên dụng phục vụ vận chuyển, nâng hạ máy móc thiết bị công nghiệp nặng siêu trường, siêu trọng.' : 'Experienced staff with specialized equipment serving transportation and lifting of super long and super heavy industrial machinery and equipment.',
            image: '/images/Cẩu máy ép nhựa.jpg',
            href: `/${locale}/services/lifting-installation`
        },
        {
            title: isVi ? 'Vận Tải Nội Địa' : 'Inland Transport',
            description: isVi ? 'Vận tải đường bộ, đường thủy và đa phương thức từ Bắc vào Nam. Tối ưu phương án vận chuyển để giảm thiểu chi phí và thời gian.' : 'Road, waterway and multi-modal transport from North to South. Optimize shipping plans to minimize costs and time.',
            image: '/images/Dịch vụ chuyển máy CNC.jpg',
            href: `/${locale}/services/inland-transport`
        },
        {
            title: isVi ? 'Đóng Gói Máy Móc Thiết Bị' : 'Packaging of Machinery and Equipment',
            description: isVi ? 'Dịch vụ đóng gói chuyên nghiệp cho máy móc thiết bị công nghiệp, đảm bảo an toàn tuyệt đối trong quá trình vận chuyển.' : 'Professional packaging services for industrial machinery and equipment, ensuring absolute safety during transportation.',
            image: '/images/Dịch vụ đóng gói máy móc.jpg',
            href: `/${locale}/services/packaging`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: `url('${encodeURI("/images/Dịch vụ cẩu máy.jpg")}')`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-white/70"
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                style: {
                    marginLeft: '240px',
                    marginRight: '240px',
                    marginTop: '80px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "rounded-xl overflow-hidden shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1F5F9E] text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 py-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${locale}`,
                                            className: "flex items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-lg p-2 shadow-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/logo_horizontal.png",
                                                    alt: "Nhat Minh Huy",
                                                    width: 200,
                                                    height: 50,
                                                    className: "h-12 w-auto",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/en${pathWithoutLocale}`,
                                                    className: `px-4 py-2 rounded font-bold text-sm transition-colors ${locale === 'en' ? 'bg-[#FFD900] text-[#1F5F9E]' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                                    children: "EN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/vi${pathWithoutLocale}`,
                                                    className: `px-4 py-2 rounded font-bold text-sm transition-colors ${locale === 'vi' ? 'bg-[#FFD900] text-[#1F5F9E]' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                                    children: "VI"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[locale]/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#FFD900]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 py-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 text-sm text-[#1F5F9E] font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+84968903913",
                                                    className: "flex items-center gap-2 hover:underline transition-all",
                                                    title: "Call us",
                                                    children: "+84 968 903 913"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "or"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        const email = 'nhatminhhuy.co@gmail.com';
                                                        // Try to open email client
                                                        window.location.href = `mailto:${email}`;
                                                        // Also copy to clipboard
                                                        navigator.clipboard.writeText(email).then(()=>{
                                                            alert(isVi ? 'Email đã được sao chép!' : 'Email copied to clipboard!');
                                                        }).catch((err)=>{
                                                            console.error('Failed to copy email:', err);
                                                        });
                                                    },
                                                    className: "hover:underline transition-all cursor-pointer bg-transparent border-none text-[#1F5F9E] font-semibold text-sm",
                                                    title: "Send us an email",
                                                    type: "button",
                                                    children: "nhatminhhuy.co@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "flex items-center gap-8 text-sm font-bold text-[#1F5F9E]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}`,
                                                    className: "hover:underline",
                                                    children: "HOME"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}/contact`,
                                                    className: "hover:underline",
                                                    children: "CONTACT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsSearchOpen(true),
                                                    className: "hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0",
                                                    "aria-label": isVi ? 'Tìm kiếm' : 'Search',
                                                    type: "button",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[locale]/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-start justify-center pt-32 px-4",
                        onClick: ()=>setIsSearchOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-2xl glass-card p-8 animate-slideDown",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSearchOpen(false),
                                        className: "absolute top-4 right-4 text-gray-500 hover:text-[#1F5F9E] transition-colors",
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiX"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSearch,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-[#1F5F9E] mb-2",
                                                        children: isVi ? 'Tìm kiếm dịch vụ' : 'Search Services'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: isVi ? 'Nhập từ khóa để tìm kiếm dịch vụ của chúng tôi' : 'Enter keywords to search our services'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiSearch"], {
                                                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        placeholder: isVi ? 'Ví dụ: vận chuyển, cẩu máy, đóng gói...' : 'e.g., transport, lifting, packaging...',
                                                        className: "w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FFD900] focus:outline-none text-lg transition-colors",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "flex-1 bg-gradient-to-r from-[#1F5F9E] to-[#2976BA] text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all transform hover:scale-105",
                                                        children: isVi ? 'Tìm kiếm' : 'Search'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsSearchOpen(false),
                                                        className: "px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors",
                                                        children: isVi ? 'Hủy' : 'Cancel'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-3",
                                                        children: isVi ? 'Tìm kiếm phổ biến:' : 'Popular searches:'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: [
                                                            {
                                                                vi: 'Vận chuyển',
                                                                en: 'Transport'
                                                            },
                                                            {
                                                                vi: 'Cẩu máy',
                                                                en: 'Lifting'
                                                            },
                                                            {
                                                                vi: 'Đóng gói',
                                                                en: 'Packaging'
                                                            },
                                                            {
                                                                vi: 'Lắp đặt',
                                                                en: 'Installation'
                                                            }
                                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setSearchTerm(isVi ? item.vi : item.en),
                                                                className: "px-4 py-2 bg-[#FFD900]/20 text-[#1F5F9E] rounded-full text-sm font-semibold hover:bg-[#FFD900] transition-colors",
                                                                children: isVi ? item.vi : item.en
                                                            }, index, false, {
                                                                fileName: "[project]/app/[locale]/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex relative min-h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "w-64 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "sticky top-0 space-y-2 p-2",
                                    children: sidebarMenu.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "block px-6 py-4 font-bold text-sm tracking-wide transition-all duration-300 bg-[#1F5F9E] text-white hover:bg-[#2976BA] hover:transform hover:scale-105 hover:shadow-md rounded-l-xl",
                                            children: item.title
                                        }, index, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/[locale]/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 301,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex-1 p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-6xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-6 leading-tight",
                                                    children: isVi ? 'VẬN CHUYỂN NIỀM TIN - KẾT NỐI THÀNH CÔNG' : 'DELIVERING TRUST - CONNECTING SUCCESS'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-gray-800 leading-relaxed mb-6",
                                                    children: isVi ? 'Công Ty TNHH Thương Mại Dịch Vụ Vận Tải Nhật Minh Huy hoạt động trong lĩnh vực cung ứng lao động, cung cấp vật tư, dịch vụ hỗ trợ logistics, các giải pháp hàng đầu về giao nhận và vận chuyển hàng hóa, nâng hạ và lắp đặt máy móc thiết bị.' : 'Nhat Minh Huy Transport Service Trading Company Limited operates in the field of labor supply, material supply, logistics support services, leading solutions for freight forwarding and transportation, and lifting and installation of machinery and equipment.'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-gray-800 leading-relaxed",
                                                    children: isVi ? 'Với đội ngũ nhân viên chuyên nghiệp, được đào tạo bài bản, chúng tôi tự tin tiếp nhận mọi nhu cầu của khách hàng. Chúng tôi cam kết mang đến cho khách hàng và đối tác trong và ngoài nước những trải nghiệm dịch vụ tốt nhất, trong thời gian nhanh nhất.' : 'With a team of professional and well-trained employees, we confidently accept all customer needs. We are committed to providing domestic and foreign customers and partners with the best service experience, in the fastest time.'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-8",
                                                    children: isVi ? 'Dịch Vụ Nổi Bật' : 'Featured Services'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                                    children: featuredServices.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: service.href,
                                                            className: "glass-card overflow-hidden group cursor-pointer flex flex-col h-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative h-48 overflow-hidden flex-shrink-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: service.image,
                                                                            alt: service.title,
                                                                            fill: true,
                                                                            className: "object-cover group-hover:scale-110 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                                            lineNumber: 350,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                                            lineNumber: 356,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-6 bg-white/90 flex flex-col flex-grow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-xl font-bold text-[#1F5F9E] mb-3 group-hover:text-[#FFD900] transition-colors leading-tight",
                                                                            children: service.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-700 text-sm leading-relaxed flex-grow",
                                                                            children: service.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold bg-gradient-to-r from-[#1F5F9E] to-[#FFD900] bg-clip-text text-transparent mb-4",
                                                    children: isVi ? 'Đối Tác & Khách Hàng' : 'Our Partners & Clients'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mb-8",
                                                    children: isVi ? 'Chúng tôi tự hào phục vụ các doanh nghiệp hàng đầu Việt Nam' : 'We are proud to serve leading Vietnamese enterprises'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                                                    children: [
                                                        {
                                                            name: 'Vietnam Airlines',
                                                            logo: '/images/partner/ic_vietnam_airlines.png'
                                                        },
                                                        {
                                                            name: 'EMS Vietnam',
                                                            logo: '/images/partner/ic_ems.png'
                                                        },
                                                        {
                                                            name: 'Gemadept',
                                                            logo: '/images/partner/ic_gemadept.png'
                                                        },
                                                        {
                                                            name: 'CJ Cầu Tre',
                                                            logo: '/images/partner/ic_cjcautre.png'
                                                        },
                                                        {
                                                            name: 'Coteccons',
                                                            logo: '/images/partner/ic_coteccons.jpg'
                                                        },
                                                        {
                                                            name: 'Hoa Sen Group',
                                                            logo: '/images/partner/ic_hoasen.png'
                                                        },
                                                        {
                                                            name: 'Tôn Nam Kim',
                                                            logo: '/images/partner/ic_tonnamkim.png'
                                                        },
                                                        {
                                                            name: 'Phong Phú',
                                                            logo: '/images/partner/ic_phongphu.jpg'
                                                        },
                                                        {
                                                            name: 'TH True Milk',
                                                            logo: '/images/partner/ic_thtruemilk.png'
                                                        },
                                                        {
                                                            name: 'BioPharma',
                                                            logo: '/images/partner/ic_biopharma.png'
                                                        },
                                                        {
                                                            name: 'Hòa Phát',
                                                            logo: '/images/partner/ic_hoaphat.png'
                                                        },
                                                        {
                                                            name: 'TTC',
                                                            logo: '/images/partner/ic_ttc.webp'
                                                        },
                                                        {
                                                            name: 'VN Steel',
                                                            logo: '/images/partner/ic_vnsteel.jpg'
                                                        },
                                                        {
                                                            name: 'Quatest 3',
                                                            logo: '/images/partner/ic_quatest3.png'
                                                        },
                                                        {
                                                            name: 'Quacert',
                                                            logo: '/images/partner/ic_quacert.png'
                                                        },
                                                        {
                                                            name: 'Vinacontrol',
                                                            logo: '/images/partner/ic_vinacontrol.png'
                                                        },
                                                        {
                                                            name: 'IPH',
                                                            logo: '/images/partner/ic_iph.jpeg'
                                                        },
                                                        {
                                                            name: 'Vietnam Control',
                                                            logo: '/images/partner/ic_vietnamcontrol.png'
                                                        }
                                                    ].map((partner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "glass-card p-4 flex items-center justify-center hover:border-[#FFD900]/40 transition-all hover:scale-105 min-h-[100px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: partner.logo,
                                                                alt: partner.name,
                                                                width: 120,
                                                                height: 60,
                                                                className: "object-contain max-h-16 w-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[locale]/page.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/app/[locale]/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[locale]/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[locale]/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 316,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "w-16 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 flex flex-col gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-12 h-12 bg-gray-600 hover:bg-[#1F5F9E] flex items-center justify-center text-white transition-colors mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[locale]/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 421,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 299,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(HomePage, "oT7Eol6j7Sl68wKs3xSCjgwqNVQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%5Blocale%5D_page_tsx_12h~nho._.js.map