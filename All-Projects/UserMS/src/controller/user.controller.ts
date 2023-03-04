import express, { Request, Response } from 'express';
import { prisma } from '../config/db'
import { role } from '@prisma/client';

export async function AddNewUser(req: Request, res: Response) {
    try {
        const { username, password, email, role, joiningYear, age } = req.body;
    if (/[a-z]/i.test(req.body.joiningYear)) {
        return res.status(400).json({ Error: "Must be numbers" })
    }
        console.log(req.body)
        const user = await prisma.user.create({
            data: {
                username,
                password,
                email,
                role,
                joiningYear,
                age,
            },
        });
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ error, "format":
         " username, password, email, role, joiningYear, and age are (required)" 
        })
    }
}
export async function getUserOlderThan(req: Request, res: Response) {
    if (/[a-z]/i.test(req.params.age)) {
        return res.status(400).json({ Error: "Invalid request" })
    }
    const users = await prisma.user.findMany({
        where: {
            age: { gt: Number(req.params.age) }
        }
    });
    if (users == null) {
        res.status(400).json({ Error: "User not found" })
    } else {
        res.json(users);
    }
}
export async function getUser(req: Request, res: Response) {

    console.log(req.params.id)

    const user = await prisma.user.findUnique({
        where: { id: req.params.id }
    });
    if (user == null) {
        res.status(400).json({ Error: "User not found" })
    } else {
        res.json(user);
    }
}
export async function getByEmail(req: Request, res: Response) {
    const user = await prisma.user.findUnique({
        where: { email: req.params.email }
    });
    if (user == null) {
        res.status(400).json({ Error: "User not found" })
    } else {
        res.json(user);
    }
}
export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(400).json({ Error: error })

    }
}
export async function totalCountHavingThisRole(req: Request, res: Response) {
    const count = await prisma.user.count({
    where: { role: req.params.role.toUpperCase() as role }
    });
    res.json({ count });
}
export async function LogIn(req: Request, res: Response) {

    const { email, password } = req.body;
    const user = await prisma.user.findUnique({


        where: { email }


    });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid Log in' });
    }

    res.json(user);
}
export async function updatePassword(req: Request, res: Response) {
    const { id } = req.params;
    const { newPassword } = req.body;
    const user = await prisma.user.update({

        where: { id },
        data: { password: newPassword }


    });

    res.json(user);
}
export async function getAllUsersJoinedSameYearOrAfter(req: Request, res: Response)
 {
    if (/[a-z]/i.test(req.params.year)) {
        return res.status(400).json({ Error: "invalid request" })
    }
    const users = await prisma.user.findMany({
        where: {
            joiningYear: {
                gte: req.params.year,
            },
        },
    });
    res.json(users);
}
export async function didUserJoinOnThisYear(req: Request, res: Response) {
    if (!req.body.year) {
        return res.json({ error: "invalid request" })
    }
    const user = await prisma.user.findUnique({
        where: {
        id: req.params.id
        },
    });
    if (user) {
        if (user.joiningYear == req.body.year) {
            return res.json({ sameYear: true })
        }
        else { return res.json({ sameYear: false }) }
    }
    else {
        res.json({ error: "invalid request" })
    }
}