import { Request, Response } from "express";

export const list = async (req: Request, res: Response) => {
	try {
		// const users = await User.find();
		const users = [
			{
				id: 1,
				name: "John Doe",
				email: "john@gmail.com",
			},
			{
				id: 2,
				name: "Jane Doe",
				email: "jane@gmail.com",
			},
		];
		return res.status(200).json({
			users,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const create = async (req: Request, res: Response) => {
	try {
		// const user = await User.create(req.body);
		const user = {
			id: 1,
			name: "John Doe",
			email: "john@outlook.com",
		};
		return res.status(201).json({
			user,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const get = async (req: Request, res: Response) => {
	try {
		// const user = await User.findById(req.params.id);
		const user = {
			id: 1,
			name: "John Doe",
		};
		return res.status(200).json({
			user,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const update = async (req: Request, res: Response) => {
	try {
		const userId = req.params.id;
		const user = {
			name: "John Doe",
		};
		const updatedUser = {
			id: userId,
			...user,
		};
		return res.status(200).json({
			user: updatedUser,
		});
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

export const remove = async (req: Request, res: Response) => {
	try {
		const userId = req.params.id;
		return res.status(204).json();
	} catch (error: any) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
