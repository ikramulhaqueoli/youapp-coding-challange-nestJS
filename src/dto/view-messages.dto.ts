import { IsNotEmpty, IsString, IsOptional, Validate } from 'class-validator';
import { PaginationDto } from './pagination.dto';
import { DtoValidator } from 'src/utils/dto-validator.util';

export class ViewMessagesDto {
  @IsNotEmpty()
  @IsString()
  partnerUsername: string;

  @IsOptional()
  @Validate(DtoValidator.Pagination, {
    message: 'Pagination limit and page must not be 0.',
  })
  pagination?: PaginationDto = {
    page: 1,
    limit: 20
  }
}
