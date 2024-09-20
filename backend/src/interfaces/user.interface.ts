export default interface IUser extends Document {
	id?:string
	name: string
	password: string
	email: string
	role: string
	comparePassword(p1: string, p2: string): Promise<string>
}
