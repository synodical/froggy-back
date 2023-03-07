import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: '11' })
  @IsNotEmpty()
  post_id: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  writer_id: number;

  @ApiProperty({
    example: 'synodic',
  })
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({ example: '잘 좀 하세요!!' })
  @IsNotEmpty()
  content: string;
}