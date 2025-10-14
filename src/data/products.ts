import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isNew?: boolean;
}

const createRandomProduct = (): Product => {
  const isNew = faker.datatype.boolean();
  const hasDiscount = !isNew && faker.datatype.boolean({ probability: 0.5 });
  const price = parseFloat(faker.commerce.price({ min: 10000, max: 150000, dec: 0 }));

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: price.toLocaleString('ku-IQ', { style: 'currency', currency: 'IQD', minimumFractionDigits: 0 }),
    originalPrice: hasDiscount 
      ? (price * 1.25).toLocaleString('ku-IQ', { style: 'currency', currency: 'IQD', minimumFractionDigits: 0 })
      : undefined,
    rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
    reviewCount: faker.number.int({ min: 5, max: 200 }),
    imageUrl: `${faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 })}?random=${faker.string.uuid()}`,
    isNew: isNew,
  };
};

export const mockProducts: Product[] = Array.from({ length: 8 }, createRandomProduct);
