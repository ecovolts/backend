import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator'

export class UserInterface {
  @IsNotEmpty()
  @IsUUID()
  id: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  avatarUrl?: string | null

  @IsNotEmpty()
  @IsNumber()
  accessLevel: number

  @IsBoolean()
  blocked: boolean
}

export class CreateUserBody {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  name: string

  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsString()
  @IsEmail()
  email: string

  @IsBoolean()
  passwordEnabled: boolean

  @IsString()
  avatarUrl?: string | null

  @IsString()
  accountType?: string | null
}
