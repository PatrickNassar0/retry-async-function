type AsyncFunction<T> = () => Promise<T>;

export async function retryAsync<T>(
  fn: AsyncFunction<T>,
  maxRetries = 3,
  delayMs = 500
): Promise<T> {
  let attempt = 0;

  while (attempt <= maxRetries) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      await delay(delayMs);
      attempt++;
    }
  }

  throw new Error(`Failed after ${maxRetries} retries`);
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
