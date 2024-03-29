import { query } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    const sql = "SELECT * FROM products ORDER BY id DESC";
    const result = await query(sql, "")

    try {
        return NextResponse.json(result)
    } catch (err) {
        return NextResponse.json(err)
    }
}