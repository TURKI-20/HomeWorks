import express, { Request, Response } from 'express';
import { prisma } from '../config/db'


export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  res.json(users);
}

export async function AddUser(req: Request, res: Response) {
    const { id, username, password } = req.body;

    if ( !username || !password) {
        return res.status(400).json({ error: 'Name & Password are (required)!' });
    }
    const newUser = await prisma.user.create({
         data: {
             id, username, password 
            } 
            });
    res.json(newUser);
}

export async function AddBook(req: Request, res: Response) {

    const { name, genre } = req.body;
  
    const book = await prisma.book.create({
      data: { name, genre },
    });
  
    res.json(book);
  }
  export async function getAllLoans(req: Request, res: Response) {
    const loans = await prisma.loan.findMany();
  
    res.json(loans);
  }
  export async function getAllBooks(req: Request, res: Response) {
    const books = await prisma.book.findMany();
  
    res.json(books);
  }
  export async function addALoan(req: Request, res: Response) {
    const { id, userId, bookId } = req.body;

    if ( !userId || !bookId) {
      return res.status(400).json({ error: 'All fields are (required)!' });
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
      });
    
      if (!user) {
        return res.status(400).json({ error: `User with ID ${userId} not found!` });
      }
    
      const findbook = await prisma.book.findUnique({
        where: { id: bookId },
      });
    
      if (!findbook) {
        return res.status(400).json({ error: `Book with ID ${bookId} not found!!` });
      }

    const book = await prisma.loan.create({ 

        data: {
        userId, bookId 
        }
    
    });
    res.json(book);
  }


  export async function getLendedBooks(req: Request, res: Response) {
    const lendedBooks = await prisma.loan.findMany({
      include: {
                book:true,
                user: true, 
      }
    });
    res.json(lendedBooks);
  }