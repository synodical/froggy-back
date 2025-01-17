import { ApiProperty } from '@nestjs/swagger';

export class ShowThreadsDto {
  @ApiProperty({ example: '2' })
  writerId: number;

  @ApiProperty({ example: '2' })
  patternId: number;

  @ApiProperty({ example: '0' })
  liked: number;

  @ApiProperty({ example: '내용입니다.' })
  content: string;

  @ApiProperty({ example: '2023-02-27T15:15:49.695Z' })
  createdAt: Date;
}
