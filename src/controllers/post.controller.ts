import { Request, Response } from "express";

import { connect } from "../database";
import { Post } from '../interface/Post';

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM post');
    return res.json(posts[0]);
};

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO post SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
    
}