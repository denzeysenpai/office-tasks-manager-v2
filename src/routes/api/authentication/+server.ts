import type { RequestHandler } from "@sveltejs/kit";
import mysql from "mysql2/promise";

export const GET : RequestHandler = async(request) => {
    return new Response(JSON.stringify({
        status: 200,
        body: {
        message: "",
        }
    }));
}

export const POST : RequestHandler = async(request) => {
    return new Response(JSON.stringify({
        status: 200,
        body: {
        message: "",
        }
    }));
}