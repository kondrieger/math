<template>
    <div class="header">
        <div class="container header__wrap">
            <img
                class="header__logo"
                :src="require('../../img/svg/maths_logo.svg')"
                alt="Алгоритмика математика логотип"
            />
            <div class="header__links" v-if="!isTablet">
                <a class="header__links-link" href="#"><p>Факультет программирования</p></a>
                <a class="header__links-link" href="#"><p>Курсы</p></a>
                <a class="header__links-link" href="#"><p>О нас</p></a>
                <a class="header__links-link" href="#"><p>Площадки</p></a>
            </div>
            <div class="header__links header__links--media" v-if="!isTablet">
                <a class="header__links-phone" href="tel:+74950239428"><p>+7 (495) 023-94-28</p></a>
                <div class="header__links-social">
                    <a href="#" class="header__links-social-item">
                        <img
                            class="header__links-social-item-img--whats"
                            :src="require('../../img/svg/whats_logo.svg')"
                            alt="Whatsapp логотип"
                        />
                    </a>

                    <a href="#" class="header__links-social-item">
                        <img
                            class="header__links-social-item-img--tg"
                            :src="require('../../img/svg/tg_logo.svg')"
                            alt="Telegram логотип"
                        />
                    </a>
                </div>
            </div>
            <div v-else class="header__burger-wrap" @click="openModal('Burger')">
                <img class="header__burger-img" :src="require('../../img/svg/burger_icon.svg')" alt="" />
            </div>
        </div>
        <modal :close="closeModal" v-if="isModalOpen('Burger')">
            <div slot="header">
                <img
                    class="header__logo--white"
                    :src="require('../../img/svg/maths_logo_white.svg')"
                    alt="Алгоритмика математика логотип"
                />
            </div>
            <div slot="body">
                <div class="header__burger-wrap">
                    <div class="header__links">
                        <a class="header__links-link" href="#"><p>Факультет программирования</p></a>
                        <a class="header__links-link" href="#"><p>Франшиза</p></a>
                        <a class="header__links-link" href="#"><p>Договор оферты</p></a>
                        <a class="header__links-link" href="#"><p>Контакты</p></a>
                    </div>
                    <div class="header__links header__links--media">
                        <a class="header__links-phone" href="tel:+74950239428"><p>+7 (495) 023-94-28</p></a>
                        <div class="header__links-social">
                            <a href="#" class="header__links-social-item">
                                <img
                                    class="header__links-social-item-img--whats"
                                    :src="require('../../img/svg/whats_logo_white.svg')"
                                    alt="Whatsapp логотип"
                                />
                            </a>

                            <a href="#" class="header__links-social-item">
                                <img
                                    class="header__links-social-item-img--tg"
                                    :src="require('../../img/svg/tg_logo_white.svg')"
                                    alt="Telegram логотип"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import './styles.css';
import Modal from '../modal/modal.vue';
import modalMixin from '../../scripts/modalMixin.js';

export default {
    name: 'a-header',
    components: { Modal },
    mixins: [modalMixin],
    data() {
        return {};
    },
    computed: {
        isTablet() {
            return this.$mq.tablet;
        },
    },
    methods: {
        burger() {
            console.log('burger');
        },
    },
};
</script>
