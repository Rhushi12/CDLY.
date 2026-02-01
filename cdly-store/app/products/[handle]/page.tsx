"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import VariantPicker from "../../components/product/VariantPicker";
import ATCButton from "../../components/product/ATCButton";
import ProductDetails from "../../components/product/ProductDetails";
import RelatedProducts from "../../components/product/RelatedProducts";
import Footer from "../../components/Footer";

// Mock product data - would come from API/Shopify in production
const mockProducts: Record<string, {
    title: string[];
    price: string;
    description: string;
    breadcrumbs: string[];
    images: string[];
    sizes: string[];
    details: { label: string; value: string }[];
    careInstructions: string;
    inStock: boolean;
}> = {
    // Wool Trench Keys
    "wool-trench-coat": {
        title: ["Wool", "Trench", "Coat"],
        price: "$850.00",
        description: "A rigorous study in form and function. This double-breasted trench is constructed from heavyweight Italian virgin wool with a felted finish. Features architectural lapels, dropped shoulders, and a minimalist belted waist. Unlined to reveal the precision of the interior construction.",
        breadcrumbs: ["Shop", "Outerwear", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"],
        sizes: ["S", "M", "L"],
        details: [
            { label: "Composition", value: "100% Virgin Wool" },
            { label: "Origin", value: "Made in Italy" },
            { label: "Fit", value: "Oversized / Relaxed" },
            { label: "Reference", value: "TC-004-BLK" },
        ],
        careInstructions: "This garment is constructed from natural fibers that require gentle handling. To maintain the integrity of the fabric and the sharpness of the silhouette, professional dry cleaning is mandatory. Do not wash, bleach, or tumble dry.",
        inStock: true,
    },
    "wool-trench": {
        title: ["Wool", "Trench", "Coat"],
        price: "$850.00",
        description: "A rigorous study in form and function. This double-breasted trench is constructed from heavyweight Italian virgin wool with a felted finish. Features architectural lapels, dropped shoulders, and a minimalist belted waist. Unlined to reveal the precision of the interior construction.",
        breadcrumbs: ["Shop", "Outerwear", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"],
        sizes: ["S", "M", "L"],
        details: [
            { label: "Composition", value: "100% Virgin Wool" },
            { label: "Origin", value: "Made in Italy" },
            { label: "Fit", value: "Oversized / Relaxed" },
            { label: "Reference", value: "TC-004-BLK" },
        ],
        careInstructions: "Professional dry clean only.",
        inStock: true,
    },
    // Structured Blazer Keys
    "structured-blazer": {
        title: ["Structured", "Blazer"],
        price: "$650.00",
        description: "A meticulously tailored blazer with precise shoulder construction and clean lines. Crafted from premium Italian wool, this piece exemplifies our commitment to architectural silhouettes.",
        breadcrumbs: ["Shop", "Tailoring", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798"],
        sizes: ["XS", "S", "M", "L", "XL"],
        details: [
            { label: "Composition", value: "95% Wool, 5% Cashmere" },
            { label: "Origin", value: "Made in Italy" },
            { label: "Fit", value: "Slim / Tailored" },
            { label: "Reference", value: "BL-012-BLK" },
        ],
        careInstructions: "Dry clean only. Store on a proper suit hanger to maintain shoulder shape.",
        inStock: true,
    },
    // Pleated Trousers Keys
    "pleated-trousers": {
        title: ["Pleated", "Trousers"],
        price: "$340.00",
        description: "Wide-leg trousers featuring deep double pleats for volume and movement. Cut from a fluid wool blend that drapes elegantly. Includes side seam pockets and a clean waistband.",
        breadcrumbs: ["Shop", "Bottoms", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM"],
        sizes: ["28", "30", "32", "34", "36"],
        details: [
            { label: "Composition", value: "60% Wool, 40% Viscose" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Wide Leg" },
            { label: "Reference", value: "TR-008-GRY" },
        ],
        careInstructions: "Dry clean or gentle cold wash.",
        inStock: true,
    },
    "pleated-trouser": {
        title: ["Pleated", "Trousers"],
        price: "$340.00",
        description: "Wide-leg trousers featuring deep double pleats for volume and movement. Cut from a fluid wool blend that drapes elegantly. Includes side seam pockets and a clean waistband.",
        breadcrumbs: ["Shop", "Bottoms", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM"],
        sizes: ["28", "30", "32", "34", "36"],
        details: [
            { label: "Composition", value: "60% Wool, 40% Viscose" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Wide Leg" },
            { label: "Reference", value: "TR-008-GRY" },
        ],
        careInstructions: "Dry clean or gentle cold wash.",
        inStock: true,
    },
    "relaxed-pleated-trouser": {
        title: ["Relaxed", "Pleated", "Trouser"],
        price: "$340.00",
        description: "Wide-leg trousers featuring deep double pleats for volume and movement. Cut from a fluid wool blend that drapes elegantly. Includes side seam pockets and a clean waistband.",
        breadcrumbs: ["Shop", "Bottoms", "Spring 25"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM"],
        sizes: ["28", "30", "32", "34", "36"],
        details: [
            { label: "Composition", value: "60% Wool, 40% Viscose" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Wide Leg" },
            { label: "Reference", value: "TR-009-GRY" },
        ],
        careInstructions: "Dry clean or gentle cold wash.",
        inStock: true,
    },
    // Boots
    "leather-chelsea-boot": {
        title: ["Leather", "Chelsea", "Boot"],
        price: "$480.00",
        description: "Classic Chelsea boots enhanced with a chunky rubber sole. Crafted from smooth, full-grain calf leather. Features elasticated side panels and pull tabs for ease of wear.",
        breadcrumbs: ["Shop", "Footwear", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw"],
        sizes: ["39", "40", "41", "42", "43", "44", "45"],
        details: [
            { label: "Upper", value: "100% Calf Leather" },
            { label: "Sole", value: "Rubber Lug Sole" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Clean with soft cloth and leather conditioner.",
        inStock: true,
    },
    "chelsea-boot": {
        title: ["Leather", "Chelsea", "Boot"],
        price: "$480.00",
        description: "Classic Chelsea boots enhanced with a chunky rubber sole. Crafted from smooth, full-grain calf leather. Features elasticated side panels and pull tabs for ease of wear.",
        breadcrumbs: ["Shop", "Footwear", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw"],
        sizes: ["39", "40", "41", "42", "43", "44", "45"],
        details: [
            { label: "Upper", value: "100% Calf Leather" },
            { label: "Sole", value: "Rubber Lug Sole" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Clean with soft cloth and leather conditioner.",
        inStock: true,
    },
    "boot": {
        title: ["Leather", "Chelsea", "Boot"],
        price: "$480.00",
        description: "Classic Chelsea boots enhanced with a chunky rubber sole. Crafted from smooth, full-grain calf leather. Features elasticated side panels and pull tabs for ease of wear.",
        breadcrumbs: ["Shop", "Footwear", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw"],
        sizes: ["39", "40", "41", "42", "43", "44", "45"],
        details: [
            { label: "Upper", value: "100% Calf Leather" },
            { label: "Sole", value: "Rubber Lug Sole" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Clean with soft cloth and leather conditioner.",
        inStock: true,
    },
    // Accessories
    "silk-print-scarf": {
        title: ["Silk", "Print", "Scarf"],
        price: "$120.00",
        description: "A lightweight silk foulard featuring our seasonal abstract print. Can be worn around the neck, as a headscarf, or tied to a bag handle.",
        breadcrumbs: ["Shop", "Accessories", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM"],
        sizes: ["One Size"],
        details: [
            { label: "Composition", value: "100% Silk Twill" },
            { label: "Dimensions", value: "90cm x 90cm" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Dry clean only.",
        inStock: true,
    },
    "silk-scarf": {
        title: ["Silk", "Print", "Scarf"],
        price: "$120.00",
        description: "A lightweight silk foulard featuring our seasonal abstract print. Can be worn around the neck, as a headscarf, or tied to a bag handle.",
        breadcrumbs: ["Shop", "Accessories", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM"],
        sizes: ["One Size"],
        details: [
            { label: "Composition", value: "100% Silk Twill" },
            { label: "Dimensions", value: "90cm x 90cm" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Dry clean only.",
        inStock: true,
    },
    "scarf": {
        title: ["Silk", "Print", "Scarf"],
        price: "$120.00",
        description: "A lightweight silk foulard featuring our seasonal abstract print. Can be worn around the neck, as a headscarf, or tied to a bag handle.",
        breadcrumbs: ["Shop", "Accessories", "FW24"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM"],
        sizes: ["One Size"],
        details: [
            { label: "Composition", value: "100% Silk Twill" },
            { label: "Dimensions", value: "90cm x 90cm" },
            { label: "Origin", value: "Made in Italy" },
        ],
        careInstructions: "Dry clean only.",
        inStock: true,
    },
    // Shirts
    "oversized-shirt": {
        title: ["Oversized", "Poplin", "Shirt"],
        price: "$290.00",
        description: "Crisp cotton poplin shirt cut with an exaggerated, oversized fit. Features a sharp point collar, dropped shoulders, and mother-of-pearl buttons.",
        breadcrumbs: ["Shop", "Tops", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw"],
        sizes: ["XS/S", "M/L"],
        details: [
            { label: "Composition", value: "100% Cotton Poplin" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Very Oversized" },
        ],
        careInstructions: "Machine wash cold, hang dry.",
        inStock: true,
    },
    "poplin-shirt": {
        title: ["Oversized", "Poplin", "Shirt"],
        price: "$290.00",
        description: "Crisp cotton poplin shirt cut with an exaggerated, oversized fit. Features a sharp point collar, dropped shoulders, and mother-of-pearl buttons.",
        breadcrumbs: ["Shop", "Tops", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw"],
        sizes: ["XS/S", "M/L"],
        details: [
            { label: "Composition", value: "100% Cotton Poplin" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Very Oversized" },
        ],
        careInstructions: "Machine wash cold, hang dry.",
        inStock: true,
    },
    "shirt": {
        title: ["Oversized", "Poplin", "Shirt"],
        price: "$290.00",
        description: "Crisp cotton poplin shirt cut with an exaggerated, oversized fit. Features a sharp point collar, dropped shoulders, and mother-of-pearl buttons.",
        breadcrumbs: ["Shop", "Tops", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw"],
        sizes: ["XS/S", "M/L"],
        details: [
            { label: "Composition", value: "100% Cotton Poplin" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Very Oversized" },
        ],
        careInstructions: "Machine wash cold, hang dry.",
        inStock: true,
    },
    "structured-poplin-shirt": {
        title: ["Structured", "Poplin", "Shirt"],
        price: "$290.00",
        description: "Crisp cotton poplin shirt cut with an exaggerated, oversized fit. Features a sharp point collar, dropped shoulders, and mother-of-pearl buttons.",
        breadcrumbs: ["Shop", "Tops", "Essentials"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw"],
        sizes: ["XS/S", "M/L"],
        details: [
            { label: "Composition", value: "100% Cotton Poplin" },
            { label: "Origin", value: "Made in Portugal" },
            { label: "Fit", value: "Very Oversized" },
        ],
        careInstructions: "Machine wash cold, hang dry.",
        inStock: true,
    },
    // Archive
    "archive-coat": {
        title: ["Archive", "Wool", "Coat"],
        price: "$1,200.00",
        description: "A rare archival piece from the Fall 2020 collection. Features distinct asymmetrical paneling and raw edge finishing. Limited availability.",
        breadcrumbs: ["Shop", "Archive", "FW20"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798"],
        sizes: ["M"],
        details: [
            { label: "Composition", value: "100% Heavy Wool" },
            { label: "Year", value: "2020" },
            { label: "Condition", value: "Pristine / Unworn" },
        ],
        careInstructions: "Professional dry clean only.",
        inStock: true,
    },
    "vint-bomber": {
        title: ["Vintage", "Bomber", "Jacket"],
        price: "$950.00",
        description: "Reconstructed vintage bomber jacket. Each piece is unique, featuring original hardware and naturally distressed leather.",
        breadcrumbs: ["Shop", "Archive", "FW21"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"],
        sizes: ["L"],
        details: [
            { label: "Composition", value: "100% Leather" },
            { label: "Year", value: "2021" },
            { label: "Condition", value: "Distressed" },
        ],
        careInstructions: "Specialist leather clean only.",
        inStock: true,
    },
    "wool-trousers": {
        title: ["Archive", "Wool", "Trousers"],
        price: "$420.00",
        description: "Archival wool trousers with signature pleated detail. High waisted fit.",
        breadcrumbs: ["Shop", "Archive", "FW22"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU"],
        sizes: ["32"],
        details: [
            { label: "Composition", value: "100% Wool" },
            { label: "Year", value: "2022" },
            { label: "Condition", value: "Excellent" },
        ],
        careInstructions: "Dry clean only.",
        inStock: true,
    },
    // New Arrivals / Others
    "technical-parka": {
        title: ["Technical", "Parka"],
        price: "$980.00",
        description: "Water-resistant technical parka with modular pockets and adjustable silhouette.",
        breadcrumbs: ["Shop", "Outerwear", "New Arrivals"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo"], // Reusing trench img for demo
        sizes: ["S", "M", "L", "XL"],
        details: [
            { label: "Composition", value: "Nylon Blend" },
            { label: "Feature", value: "Water Resistant" },
        ],
        careInstructions: "Machine wash cold.",
        inStock: true,
    },
    "cashmere-knit": {
        title: ["Cashmere", "Knit", "Sweater"],
        price: "$590.00",
        description: "Ultra-soft gauge 12 cashmere sweater in a relaxed fit.",
        breadcrumbs: ["Shop", "Knitwear", "New Arrivals"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM"], // Reusing trouser img as placeholder/texture
        sizes: ["S", "M", "L"],
        details: [
            { label: "Composition", value: "100% Cashmere" },
            { label: "Factor", value: "Soft Touch" },
        ],
        careInstructions: "Hand wash only.",
        inStock: true,
    },
    "leather-derby": {
        title: ["Leather", "Derby", "Shoe"],
        price: "$780.00",
        description: "Classic derby shoe with a modern profile.",
        breadcrumbs: ["Shop", "Footwear", "New Arrivals"],
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw"],
        sizes: ["40", "41", "42", "43", "44"],
        details: [
            { label: "Upper", value: "Calf Leather" },
            { label: "Sole", value: "Rubber" },
        ],
        careInstructions: "Polish regularly.",
        inStock: true,
    },
};

const relatedProducts = [
    { name: "Structured Blazer", category: "Tailoring", price: "$650", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798", href: "/products/structured-blazer" },
    { name: "Pleated Trousers", category: "Bottoms", price: "$420", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw", href: "#" },
    { name: "Cashmere Turtleneck", category: "Knitwear", price: "$590", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM", href: "#" },
    { name: "Leather Derby", category: "Footwear", price: "$780", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw", href: "#" },
    { name: "Utility Shirt", category: "Tops", price: "$320", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo", href: "#" },
];

export default function ProductDetailPage() {
    const params = useParams();
    const handle = params?.handle as string;

    const [selectedSize, setSelectedSize] = useState("");

    const product = mockProducts[handle] || mockProducts["wool-trench-coat"];

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }
        console.log(`Adding ${product.title.join(" ")} in size ${selectedSize} to cart`);
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Main Product Section */}
            <main className="w-full flex flex-col lg:flex-row border-b border-gray-200 bg-white">
                <ProductGallery images={product.images} productName={product.title.join(" ")} />

                <div className="w-full lg:w-2/5 relative">
                    <div className="lg:sticky lg:top-16 p-8 md:p-12 lg:p-16 flex flex-col h-auto lg:h-[calc(100vh-4rem)] overflow-y-auto">
                        <ProductInfo
                            breadcrumbs={product.breadcrumbs}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />

                        <VariantPicker
                            sizes={product.sizes}
                            selectedSize={selectedSize}
                            onSizeChange={setSelectedSize}
                        />

                        <ATCButton onAddToCart={handleAddToCart} inStock={product.inStock} />

                        {/* Stock Status */}
                        <div className="mt-6 flex items-center gap-2 text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-500">
                            <span className={`w-2 h-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                            {product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}
                        </div>
                    </div>
                </div>
            </main>

            <ProductDetails
                details={product.details}
                careInstructions={product.careInstructions}
            />

            <RelatedProducts products={relatedProducts} />

            <Footer />
        </div>
    );
}
