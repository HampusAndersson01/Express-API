import { Request, Response } from "express";

const Menu = [
  { id: 1, name: "Burger", price: 120 },
  { id: 2, name: "Salmon", price: 130 },
  { id: 3, name: "Nachos", price: 105 },
];

export const getAllFood = (req: Request, res: Response) => {
  res.status(200).json(Menu);
};

export const updateFood = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = Menu.findIndex((item) => item.id == Number(id));
  if (index !== -1) {
    Menu[index].name = name;
    Menu[index].price = price;
    res.status(200).json([]);
  } else {
    res.status(404).json();
  }
};

export const createFood = (req: Request, res: Response) => {
  const lastFoodIndex = Menu.length - 1;
  const lastId = Menu[lastFoodIndex].id;
  const id = lastId + 1;
  const newFood = {
    id,
    ...req.body,
  };

  Menu.push(newFood);

  res.status(201).json();
};

export const deleteFoodById = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = Menu.findIndex((food) => food.id === Number(id));
  if (index !== -1) {
    Menu.splice(index, 1);
    res.status(204).json(null);
  } else {
    res.status(404).json();
  }
};
