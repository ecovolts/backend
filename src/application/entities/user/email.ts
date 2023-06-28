export class Email {
  private readonly email: string

  get value(): string {
    return this.email
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[\w.-]+@[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)+$/

    return emailRegex.test(email)
  }

  constructor(email: string) {
    const isEmailValid = this.validateEmail(email)

    if (!isEmailValid) {
      throw new Error('Digite um email válido.')
    }

    this.email = email
  }
}
