import bcrypt from 'bcrypt'

/**
 * Class that provides static methods for hashing and comparing passwords using bcrypt.
 */
export class BcryptAdapter {
  /**
   * Generates a bcrypt hash for the provided data string.
   * @param data - The data string to be hashed.
   * @returns A promise that resolves with the bcrypt hash.
   * @throws {Error} If there is an error during hash generation.
   */

  static async hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(data, salt)
    return hash
  }

  /**
   * Verifies if a data string matches a bcrypt hash.
   * @param data - The data string to be compared.
   * @param hash - The bcrypt hash against which the data string is compared.
   * @returns A promise that resolves with a boolean value indicating whether the comparison is successful.
   * @throws {Error} If there is an error during hash comparison.
   */

  static async isValidHash(data: string, hash: string): Promise<boolean> {
    return bcrypt.compare(data, hash)
  }
}
