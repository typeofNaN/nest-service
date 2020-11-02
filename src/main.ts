import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { isDevMode } from '@app/app.environment';
import { APP_CONFIG } from '@app/app.config'

const { log, warn, info } = console;
const color = c => isDevMode ? c : '';
Object.assign(global.console, {
  log: (...args) => log('[log]', '[nest-service]', ...args),
  warn: (...args) => warn(color('\x1b[33m%s\x1b[0m'), '[warn]', '[nest-service]', ...args),
  info: (...args) => info(color('\x1b[34m%s\x1b[0m'), '[info]', '[nest-service]', ...args),
  error: (...args) => info(color('\x1b[31m%s\x1b[0m'), '[error]', '[nest-service]', ...args),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_CONFIG.PORT);
}
bootstrap();
