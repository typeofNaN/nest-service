import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiPropertyOptional, ApiTags } from '@nestjs/swagger'

class CreatePostDto {
  @ApiPropertyOptional({
    description: '帖子标题'
  })

  title: string
  @ApiPropertyOptional({
    description: '帖子内容'
  })
  content: string
}

@Controller('post')
@ApiTags('帖子')
export class PostController {
  @Get()
  @ApiOperation({
    summary:'获取帖子列表'
  })
  getPostList() {
    return []
  }

  @Post()
  @ApiOperation({
    summary: '创建帖子'
  })
  createPost(@Body() createPostDto: CreatePostDto) {

  }

  @Get(':id')
  @ApiOperation({
    summary: '根据ID获取帖子详情'
  })
  getPostById(@Param('id') id: string) {}

  @Put(':id')
  @ApiOperation({
    summary: '根据ID修改帖子详情'
  })
  UpdatePostById(@Param('id') id: string) {}

  @Delete(':id')
  @ApiOperation({
    summary: '根据ID删除帖子'
  })
  deletePostById(@Param('id') id: string) {}
}
