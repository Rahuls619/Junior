// utils/apiHelper.ts

export interface KalpApiResponse<T = unknown> {
    status: number;
    data: T;
  }
  
  export async function callKalpApi<T = unknown>(
    endpoint: string,
    args: Record<string, unknown> = {}
  ): Promise<KalpApiResponse<T>> {
    const response = await fetch(endpoint, {
      method: 'POST', // All methods are POST except for TotalSupply
      headers: {
        'Content-Type': 'application/json',
        auth: process.env.KALP_API_KEY as string,
      },
      body: JSON.stringify({
        network: 'TESTNET',
        blockchain: 'KALP',
        walletAddress: '7caecd9a18ea723ae81aee7119720e17c69e38d1',
        args,
      }),
    });
  
    const data = await response.json();
    return { status: response.status, data };
  }