export const successResponse = (
  title: string,
  message: string,
  data: any,
  pagination?: object
) => ({
  title,
  message,
  data,
  ...(pagination && { pagination }),
});

export const errorResponse = (
  title: string,
  message: string,
  errors?: object[]
) => ({
  title,
  message,
  errors,
});
