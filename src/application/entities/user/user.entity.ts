import { Replace } from '@src/utils/replace'
import { Email } from './email'
import { randomUUID } from 'node:crypto'

interface UserProps {
  name: string
  email: Email
  passwordEnabled: boolean
  avatarUrl?: string | null
  accountType?: string | null
  createdAt: Date
}

export class User {
  private _id: string
  private props: UserProps

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id() {
    return this._id
  }

  public get name(): string {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get email(): Email {
    return this.props.email
  }

  public set email(email: Email) {
    this.props.email = email
  }

  public get passwordEnabled(): boolean {
    return this.props.passwordEnabled
  }

  public set passwordEnabled(passwordEnabled: boolean) {
    this.props.passwordEnabled = passwordEnabled
  }

  public get avatarUrl(): string | null | undefined {
    return this.props.avatarUrl
  }

  public set avatarUrl(avatarUrl: string) {
    this.props.avatarUrl = avatarUrl
  }

  public get accountType(): string | null | undefined {
    return this.props.accountType
  }

  public set accountType(accountType: string) {
    this.props.accountType = accountType
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt
  }
}
