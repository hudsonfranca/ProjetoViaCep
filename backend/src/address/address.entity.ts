import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 9, unique: true })
  cep: string;

  @Column({ nullable: false, type: 'varchar' })
  logradouro: string;

  @Column({ nullable: true, type: 'varchar' })
  complemento: string;

  @Column({ nullable: false, type: 'varchar' })
  bairro: string;

  @Column({ nullable: false, type: 'varchar' })
  localidade: string;

  @Column({ nullable: false, type: 'varchar' })
  uf: string;

  @Column({ nullable: false, type: 'varchar' })
  ibge: string;

  @Column({ nullable: true, type: 'varchar' })
  gia: string;

  @Column({ nullable: false, type: 'varchar' })
  ddd: string;

  @Column({ nullable: true, type: 'varchar' })
  siafi: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  public static of(params: Partial<Address>): Address {
    const address = new Address();

    Object.assign(address, params);

    return address;
  }
}
