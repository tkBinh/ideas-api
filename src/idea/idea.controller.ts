import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
    constructor(private ideaService: IdeaService) {}

    @Get()
    showAllIdeals() {
        return this.ideaService.showAll();
    }

    @Post()
    createIdea(@Body() data: IdeaDTO ) {
        return this.ideaService.create(data);
    }

    @Get(':id')
    readIdeal(@Param('id') id: string) {
        return this.ideaService.read(id);
    }

    @Put(':id')
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string) {
        return this.ideaService.destroy(id);
    }
}
